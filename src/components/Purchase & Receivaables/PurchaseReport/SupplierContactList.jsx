import React from "react";
import styles from "./SupplierContactList.module.css";

function SupplierContactList({ onBack }) {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.headerContainer}>
            <div className={styles.pageTitle}>Supplier Contact List</div>
            <div className={styles.headerActions}>
              <button className={styles.addButton}>Add New Supplier</button>
            </div>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.filterSection}>
              <div className={styles.searchContainer}>
                <div className={styles.searchLabel}>Search Supplier</div>
                <div className={styles.searchInputWrapper}>
                  <input type="text" placeholder="Search by name, contact, or email" className={styles.searchPlaceholder}/>
                
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/27e61d6043150f47f7285a20cec94c158f305530?placeholderIfAbsent=true"
                    className={styles.searchIcon}
                    alt="Search"
                  />
                </div>
              </div>
              <div className={styles.filterContainer}>
                <div className={styles.filterLabels}>
                  <div className={styles.filterLabel}>Supplier Type</div>
                  <div className={styles.filterLabel}>Status</div>
                </div>
                <div className={styles.filterSelects}>
                  <select className={styles.selectBox}>
                    
                    <option className={styles.selectText}>Select type</option>
                    <option className={styles.selectText}>Type A</option>
                    <option className={styles.selectText}>Type B</option>
                    <option className={styles.selectText}>Type C</option>
                  </select>
                  <select className={styles.selectBox}>
                    <option className={styles.selectText}>Select status</option>
                    <option className={styles.selectText}>Active</option>
                    <option className={styles.selectText}>In Active</option>
                    <option className={styles.selectText}>On Hold</option>
                    
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.exportButton}>Export to Excel</button>
              <button className={styles.printButton}>Print List</button>
            </div>
            <div className={styles.supplierGrid}>
              <div className={styles.gridRow}>
                <div className={styles.gridColumn}>
                  <div className={styles.supplierCard}>
                    <div className={styles.supplierInfo}>
                      <div className={styles.supplierDetails}>
                        <div className={styles.supplierName}>
                          Tokyo Motors Inc
                        </div>
                        <div className={styles.supplierType}>Manufacturer</div>
                        <div className={styles.contactLabel}>
                          Contact Person
                        </div>
                        <div className={styles.contactValue}>
                          Tanaka Hiroshi
                        </div>
                        <div className={styles.contactLabel}>Email</div>
                        <div className={styles.contactValue}>
                          tanaka@tokyomotors.com
                        </div>
                        <div className={styles.contactLabel}>Phone</div>
                        <div className={styles.contactValue}>
                          +81-3-1234-5678
                        </div>
                        <div className={styles.contactLabel}>Address</div>
                        <div className={styles.contactValue}>
                          Shibuya, Tokyo, Japan
                        </div>
                        <div className={styles.cardActions}>
                          <div className={styles.editButton}>Edit</div>
                          <div className={styles.viewButton}>View Details</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.ratingColumn}>
                      <div className={styles.ratingContainer}>
                        <div className={styles.ratingLabel}>Rating</div>
                        <div className={styles.ratingWrapper}>
                          <div className={styles.ratingValue}>4.8</div>
                          <div className={styles.starsContainer}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/0d2ea2fc62b8e57bd17464ac859241ec38ed33cd?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/0d2ea2fc62b8e57bd17464ac859241ec38ed33cd?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/0d2ea2fc62b8e57bd17464ac859241ec38ed33cd?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/0d2ea2fc62b8e57bd17464ac859241ec38ed33cd?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/da0d3861ad158778dddc3f7f846465f07272d8d0?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Half Star"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.statusColumn}>
                      <div className={styles.statusActive}>Active</div>
                    </div>
                  </div>
                </div>
                <div className={styles.gridColumn}>
                  <div className={styles.supplierCard}>
                    <div className={styles.supplierInfo}>
                      <div className={styles.supplierDetails}>
                        <div className={styles.supplierName}>
                          Osaka Auto Parts
                        </div>
                        <div className={styles.supplierType}>
                          Parts Supplier
                        </div>
                        <div className={styles.contactLabel}>
                          Contact Person
                        </div>
                        <div className={styles.contactValue}>Yamamoto Ken</div>
                        <div className={styles.contactLabel}>Email</div>
                        <div className={styles.contactValue}>
                          ken@osakaauto.com
                        </div>
                        <div className={styles.contactLabel}>Phone</div>
                        <div className={styles.contactValue}>
                          +81-6-8765-4321
                        </div>
                        <div className={styles.contactLabel}>Address</div>
                        <div className={styles.contactValue}>
                          Chuo, Osaka, Japan
                        </div>
                        <div className={styles.cardActions}>
                          <div className={styles.editButton}>Edit</div>
                          <div className={styles.viewButton}>View Details</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.ratingColumn}>
                      <div className={styles.ratingContainer}>
                        <div className={styles.ratingLabel}>Rating</div>
                        <div className={styles.ratingWrapper}>
                          <div className={styles.ratingValue}>4.5</div>
                          <div className={styles.starsContainer}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/0d2ea2fc62b8e57bd17464ac859241ec38ed33cd?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/0d2ea2fc62b8e57bd17464ac859241ec38ed33cd?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/0d2ea2fc62b8e57bd17464ac859241ec38ed33cd?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/0d2ea2fc62b8e57bd17464ac859241ec38ed33cd?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/da0d3861ad158778dddc3f7f846465f07272d8d0?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Half Star"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.statusColumn}>
                      <div className={styles.statusActive}>Active</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.gridRow}>
                <div className={styles.gridColumn}>
                  <div className={styles.supplierCard}>
                    <div className={styles.supplierInfo}>
                      <div className={styles.supplierDetails}>
                        <div className={styles.supplierName}>
                          Nagoya Shipping Co
                        </div>
                        <div className={styles.supplierType}>
                          Service Provider
                        </div>
                        <div className={styles.contactLabel}>
                          Contact Person
                        </div>
                        <div className={styles.contactValue}>Sato Yuki</div>
                        <div className={styles.contactLabel}>Email</div>
                        <div className={styles.contactValue}>
                          sato@nagoyaship.com
                        </div>
                        <div className={styles.contactLabel}>Phone</div>
                        <div className={styles.contactValue}>
                          +81-52-9876-5432
                        </div>
                        <div className={styles.contactLabel}>Address</div>
                        <div className={styles.contactValue}>
                          Naka, Nagoya, Japan
                        </div>
                        <div className={styles.cardActions}>
                          <div className={styles.editButton}>Edit</div>
                          <div className={styles.viewButton}>View Details</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.ratingColumn}>
                      <div className={styles.ratingContainer}>
                        <div className={styles.ratingLabel}>Rating</div>
                        <div className={styles.ratingWrapper}>
                          <div className={styles.ratingValueOrange}>3.8</div>
                          <div className={styles.starsContainer}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/cff5108e0ea30993965ebae89b3f3b3676d1dcba?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/cff5108e0ea30993965ebae89b3f3b3676d1dcba?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/cff5108e0ea30993965ebae89b3f3b3676d1dcba?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/da0d3861ad158778dddc3f7f846465f07272d8d0?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Empty Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/da0d3861ad158778dddc3f7f846465f07272d8d0?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Empty Star"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.statusColumn}>
                      <div className={styles.statusOnHold}>On Hold</div>
                    </div>
                  </div>
                </div>
                <div className={styles.gridColumn}>
                  <div className={styles.supplierCard}>
                    <div className={styles.supplierInfo}>
                      <div className={styles.supplierDetails}>
                        <div className={styles.supplierName}>
                          Yokohama Traders
                        </div>
                        <div className={styles.supplierType}>Distributor</div>
                        <div className={styles.contactLabel}>
                          Contact Person
                        </div>
                        <div className={styles.contactValue}>Suzuki Akira</div>
                        <div className={styles.contactLabel}>Email</div>
                        <div className={styles.contactValue}>
                          akira@yokohamat.com
                        </div>
                        <div className={styles.contactLabel}>Phone</div>
                        <div className={styles.contactValue}>
                          +81-45-2468-1357
                        </div>
                        <div className={styles.contactLabel}>Address</div>
                        <div className={styles.contactValue}>
                          Nishi, Yokohama, Japan
                        </div>
                        <div className={styles.cardActions}>
                          <div className={styles.editButton}>Edit</div>
                          <div className={styles.viewButton}>View Details</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.ratingColumn}>
                      <div className={styles.ratingContainer}>
                        <div className={styles.ratingLabel}>Rating</div>
                        <div className={styles.ratingWrapper}>
                          <div className={styles.ratingValueOrange}>3.2</div>
                          <div className={styles.starsContainer}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/cff5108e0ea30993965ebae89b3f3b3676d1dcba?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/cff5108e0ea30993965ebae89b3f3b3676d1dcba?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/cff5108e0ea30993965ebae89b3f3b3676d1dcba?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/da0d3861ad158778dddc3f7f846465f07272d8d0?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Empty Star"
                            />
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/da0d3861ad158778dddc3f7f846465f07272d8d0?placeholderIfAbsent=true"
                              className={styles.starIcon}
                              alt="Empty Star"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.statusColumn}>
                      <div className={styles.statusInactive}>Inactive</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupplierContactList;
